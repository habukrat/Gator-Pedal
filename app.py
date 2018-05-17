import os
from flask import Flask
from flask import render_template
app = Flask(__name__)
from flask.ext.sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/[YOUR_DATABASE_NAME]'
db = SQLAlchemy(app)


@app.route("/")
def launchPage():
#	return "hello"
	return render_template('index.html')
#	return send_from_directory('website',


if __name__ == "__main__":
	port = int(os.environ.get("PORT", 5000))
	app.run(host='0.0.0.0', port=port)
