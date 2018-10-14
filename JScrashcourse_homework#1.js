// project idea: planner / calender app for events, toDos, contact info of friends, birthdays

var User = class {
    
    constructor (name, email){
        this.name = name
        this.email = email
        this.friends = []
        this.events = []
        this.toDos = []
        this.birthdays = []
    }

    attend (event){
        this.events.push(event)
    }

    attendWith (friends, event){
        event.company.push(friends)
        attend(event)
    }

    befriend (friend) {
        this.friends.push(friend)

        if(friend.birthday !== null && friend.birthday !== '') {
            this.birthdays.push(friend, friend.birthday)
        }
    }

    addToDo (toDo){
        this.toDos.push(toDo)
    }
}

var Friend = class  {

    constructor (firstName, lastName, birthday, email, phone, note){
        this.firstName = firstName
        this.lastName = lastName
        this.birthday = birthday
        this.email = email
        this.phone = phone
        this.note = note
    }
}

var ToDo = class {

    constructor (title, deadline, info){
        this.title = title
        this.deadline = deadline
        this.info = info
        this.done = false
    }

    tickOff(){
        this.done = true       
    }
}

var Event = class{

    constructor (title, date, time, location, organisation, link, status, note){
        this.title = title
        this.date = date // !could be a precise day or a span of multiple days, i.e. a conference / festival etc.!
        this.time = time
        this.location = location
        this.organisation = organisation
        this.link = link
        this.status = status // enum i.e. "registered" / "will attend", "maybe", etc.
        this.note = note
        this.company = []
    }
}

//users
var sarah = new User("sarah", "supermail@super.de")
var tabitha = new User ("tabitha", "supertabitha@super.de")

//friends
var toni = new Friend ("toni", "", "19.12.1986", "", "017776556572", "birthday present idea: tickets for musical")
var jonna = new Friend("jonna", "bergman", "", "j@super.de", "0162676284", "")

// toDos
var buyPresent = new ToDo("buy present for toni", "17.12.2018", "ask jonna if she wants to join")
var callDentist = new ToDo("call the dentist for check-up", "11.12.2018", "last visit was in May!")

//events
var jSCrashcourse = new Event("JS crashcourse", "17.10.2018", "18:30", "eurostaff", "WTM Berlin", "", "definitely", "do homework!")
var documentary = new Event ("documentary", "4.11.2018", "20:00", "cinema", "", "", "definitely", "buy 2 tickets!")

console.log(sarah)

sarah.befriend(jonna)
sarah.befriend(toni)
console.log(sarah)

sarah.attend(jSCrashcourse)
sarah.attendWith(toni, documentary)
console.log(sarah)
