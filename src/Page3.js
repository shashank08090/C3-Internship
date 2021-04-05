import React from 'react';
import './Page3.css';

function Page3() {
    return (
        <div id="Page3">
            <div id="dash">
                <div id="courses"><h1>My courses</h1></div>
                <div id="achievements"><h1>Achievements</h1></div>
                <div id="forum"><h1>Forum</h1></div>

            </div>
            <div id="rest">
                <div id="mycourses">
                    <div id="info"><h1 id="lef">My courses</h1> 
                    <h1 id="righ">See All</h1></div>
                    <div id="subjects">
                        <div id="maths"><h1>Maths</h1></div>
                        <div id="physics"><h1>Physics</h1></div>
                    </div>
                </div>
                <div id="homework"><h1>Homework progress</h1></div>

            </div>
            
        </div>
    )
}

export default Page3
