from flask import Flask, render_template, request, redirect
from datetime import datetime, timedelta

app = Flask(__name__)

app.secret_key = "naiufeuiv2334f"


@app.route("/", methods=["GET", "POST"])
def index():
    date_string = "01 October, 2024"
    # event_time = datetime.now() + timedelta(weeks=2)
    format = "%d %B, %Y"
    event_time = datetime.strptime(date_string,format)
    # print(event_time)
    if request.method == "GET":
        pass
    elif request.method == "POST":
        # 3-ids: name, email, user-message
        name = request.form.get("name")
        email = request.form.get("email")
        user_message = request.form.get("user-message")
        print(name,email, user_message)
        # what to do with the details
        # send email to code crafter blah
        
    else:
        print("i dont know what to do yet")
        
    print("this is working")
    return render_template("home.html",event_time = event_time)

# what is a hackathon?

# Who can participate?

# Do I need a team?
@app.route("/form", methods=["GET","POST"])
def form():
    if request.method == "GET":
        return render_template("form.html")
    elif request.method == "POST":
        # details
        full_name = request.form.get("fname")
        email = request.form.get("email")
        team_name = request.form.get("tname")
        skills = request.form.get("skills")
        if full_name is not None and email is not None and skills is not None:
            return redirect('/form/registered')
        else:
            return redirect("/form")
    
@app.route("/form/registered")
def registered():
    return render_template('done.html')

if __name__ == "__main__":
    app.run(debug=True)
