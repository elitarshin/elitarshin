from os import name
from flask import Flask, render_template, request, render_template_string, redirect, session, url_for, g
import sqlite3
from fastapi import Body, FastAPI
from pydantic import BaseModel
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)

conn = sqlite3.connect('user_data.db')
cursor = conn.cursor()

# Configurations for file uploads
UPLOAD_FOLDER = 'static/uploads/'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}  # Define allowed file extensions here

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

DATABASE = 'posts.db'


cursor.execute('''CREATE TABLE IF NOT EXISTS users (
id INTEGER PRIMARY KEY AUTOINCREMENT,
username TEXT NOT NULL UNIQUE,
password TEXT NOT NULL)''')
cursor.execute('INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)', ('ahakobian1', 'elitarshin1'))


conn.commit()
conn.close()



def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def init_db():
    with app.app_context():
        db = get_db()
        cursor = db.cursor()
        cursor.execute('''CREATE TABLE IF NOT EXISTS posts (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            heading TEXT NOT NULL,
                            content TEXT NOT NULL,
                            image TEXT NOT NULL
                          )''')
        db.commit()


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/sucess')
def sucess():
    if 'logged_in' in session and session['logged_in']:
         db = get_db()
         cursor = db.cursor()
         cursor.execute("SELECT id, heading, content, image FROM posts")
         posts = cursor.fetchall()
         return render_template('sucess.html', posts=posts)
    else:
        return redirect(url_for('login'))

   


@app.route('/add', methods=['GET', 'POST'])
def add_post():
    if request.method == 'POST':
        heading = request.form['heading']
        content = request.form['content']
        file = request.files['image']

        image_filename = None
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            image_filename = filename

        db = get_db()
        cursor = db.cursor()
        cursor.execute("INSERT INTO posts (heading, content, image) VALUES (?, ?, ?)",
                       (heading, content, image_filename))
        db.commit()
        return redirect(url_for('sucess'))
    return render_template('add_post.html')


# Initialize the database
init_db()
def login_user(username, password): 
    conn = sqlite3.connect('user_data.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM users WHERE username = ? AND password = ?' ,(username, password))
    user = cursor.fetchone()
    print(user)
    conn.close()

    if user:
        print("login sucsess")
        return True
    else:
        print("login fail")
        return False


app.secret_key = 'your_secret_key'  # Replace with a strong, random key

def validate_login(username, password):
    conn = sqlite3.connect('user_data.db')
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM users WHERE username = ? AND password = ?', (username, password))
    user = cursor.fetchone()

    conn.close()
    return user is not None

@app.route('/login', methods=['GET', 'POST'])
def login():
    message = ''
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if validate_login(username, password):
            session['logged_in'] = True
            session['username'] = username
            return redirect(url_for('sucess'))
        else:
            message = 'message'
            return render_template('login.html', loginMessage=message)
        
    return render_template('login.html', message=message)

@app.route('/logout')
def logout():
    session.pop('logged_in', None)
    session.pop('username', None)
    return redirect(url_for('login'))

@app.get("/")
def main():
    return render_template('index.html')

@app.route("/bagrevandresidence")
def bg():
    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT id, heading, content, image FROM posts")
    posts = cursor.fetchall()
    return render_template('buildings.html', posts=posts)
    # return render_template('buildings.html')

@app.route("/townhouses")
def th():
    return render_template('townhouse.html') 


@app.route("/blocksmanufacturing")
def blocks():
    return render_template('blocks.html') 

    
@app.route("/katlavan")
def katlavan():
    return render_template('katlavan.html') 

    
if __name__=="__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)