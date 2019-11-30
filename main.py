from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")
    
@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/laris")
def laris():
    return render_template('processando_pagamento.html')
    
@app.route("/confirmacao_pagamento")
def thankyoupage():
    return render_template('confirmacao_pagamento.html')


if __name__ == "__main__":
    app.run(debug=True)