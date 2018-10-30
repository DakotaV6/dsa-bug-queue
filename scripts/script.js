"use strict";

$(document).ready(() => {


    class BugList {
        constructor() {
            this.bugArray = [];
        }
        add(info) {
            this.bugArray.push(info);
        }
        delete() {
            this.bugArray.shift();
            if (this.bugArray.length) {
                this.display();
            } else {
                $(".bugs").html(`
                <p class="default-bug">No current bugs :D</p>
                `);
            };
        }
        display() {
            $(".bugs").html("")
            this.bugArray.forEach(bug => {
                $(".bugs").append(`
                <section class="bug">
                    <div class="timestamp">${bug.time}</div>
                    <div class="bug-title">${bug.title}</div>
                    <div class="bug-desc">${bug.description}</div>
                </section>
                `);
            });
            $(".bug").eq(0).append(`
            <button class="clear-bug" type="button">Bug Fixed</button>
            `)
        }
    };


    const bugList = new BugList();

    class Bug {
        constructor(time, title, description) {
            this.time = time;
            this.title = title;
            this.description = description;
        }
    };

    $(document)
        .on("click", "#bug-submit", () => {
            let time = new Date;
            let title = $("#bugTitle").val();
            let description = $("#bugDesc").val();
            bugList.add(new Bug(time, title, description));
            $("#bugTitle").val("");
            $("#bugDesc").val("");
            bugList.display();
        })
        .on("click", ".clear-bug", () => {
            bugList.delete();
        })














});