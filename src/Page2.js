import React from 'react';
import './Page2.css';

function Page2() {
    return (
        <div id="Page2">
            <div id="item1">
                <div id="home"><h1>Home</h1></div>
                <div id="dashboard"><h1>Dashboard</h1></div>
                </div>
            <div id="item2">
                <div id="in1"><h2>Upcoming lessons</h2></div>
                <div id="in2">
                    <div id="date"><h3>June 10, 4:00 PM</h3></div>
                    <div id="subject"><h3> Algebra 2, Maths</h3></div>
                    <div id="pic"><p> picture</p></div>
                    </div>
                <div id="in3"></div>
                <div id="in4"></div>
            </div>
            <div id="item3"><img src="../images/todolist.jpg" alt="to do" id="todo"></img></div>
            <div id="item4"><img src="../images/leaderboard.png" alt="leaderboard" id="leader"></img></div>
            
        </div>
    )
}

export default Page2
