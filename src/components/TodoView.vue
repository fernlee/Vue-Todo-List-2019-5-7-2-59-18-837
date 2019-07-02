<template>
    <div class="container">
        <div>
            <h2>Jquery To Do List</h2>
            <p>
                <em>Simple Todo List with adding and filter by diff status.</em>
            </p>
        </div>
        <div>
            <input class="input-text" type="text" name="ListItem" data-com.agilebits.onepassword.user-edited="yes">
            <div id="button">Add</div>
        </div>
        <br>
        <ol>
            <li id="c57aab79-7dfa-4d85-8ede-aa653a8b5d93" class="">
                <input name="done-todo" type="checkbox" class="done-todo"> Parking Lot APP Refactor
            </li>
            <li id="00bd6227-e881-4024-ad7a-4212d930c947" class="checked">
                <input name="done-todo" type="checkbox" class="done-todo" checked> Parking Lot APP 时序图
            </li>
            <li id="8a134a9d-1df9-475a-ba5c-e27f9f003a99" class="">
                <input name="done-todo" type="checkbox" class="done-todo"> Parking Lot APP 中类的流程图
            </li>
            <li id="af51c0e0-97a4-4e78-9a31-48763fd6c089" class="checked">
                <input name="done-todo" type="checkbox" class="done-todo" checked> 总结Java和面向对象相关的概念和知识
            </li>
            <li id="cda424c4-7f16-4841-886a-0de60a395d34" class="">
                <input name="done-todo" type="checkbox" class="done-todo"> 总结Parking Lot APP开发过程中的问题和经验
            </li>
            <li id="4a44c65d-a933-402f-b2ee-f8c2dcafee79" class="">
                <input name="done-todo" type="checkbox" class="done-todo"> 总结TDD和Mock的应用经验
            </li>
        </ol>
        <div>
            <ul id="filters">
                <li>
                    <a href="#" data-filter="all" class="selected">ALL</a>
                </li>
                <li>
                    <a href="#" data-filter="active" class="">Active</a>
                </li>
                <li>
                    <a href="#" data-filter="complete" class="">Complete</a>
                </li>
            </ul>

        </div>

    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*basic style*/

    body {
        font: normal normal 13px/16px "Open Sans", sans-serif;
        background: #ccc;
    }

    .container {
        padding: 20px;
        width: 400px;
        margin: 0 auto;
        margin-top: 40px;
        background: white;
        border-radius: 5px;
    }

    .input-text {
        width: 80%;
    }

    input {
        padding: 4px 15px 4px 0;

    }

    #button {
        display: inline-block;
        background-color: #fc999b;
        color: #ffffff;
        border-radius: 5px;
        text-align: center;
        margin-top: 2px;
        padding: 5px 15px;
    }

    #button:hover {
        cursor: pointer;
        opacity: .8;
    }

    ol {
        padding-left: 20px;
    }

    ol li {
        padding: 5px;
        color: #000;
    }

    ol li:nth-child(even) {
        background: #f4ecec;
    }

    li:hover {
        cursor: pointer;
    }

    #filters {
        text-align: center;
        margin-bottom: -10px;
        margin-top: 40px;

    }

    #filters li a {
        color: #fc999b;
        margin: 3px;
        padding: 3px 7px;
        text-decoration: none;
        border: 1px solid transparent;
        border-radius: 3px;
    }

    #filters li a.selected {
        border-color: rgba(175, 47, 47, 0.2);
    }

    #filters li a.selected, #filters li a:hover {
        border-color: rgba(175, 47, 47, 0.1);
    }

    #filters li {
        display: inline;
        margin: 0 0 5px 0;
        padding: 8px;
        list-style: none;
        outline: none;
    }

    .checked {
        color: #999;
        text-decoration: line-through;
    }

    input[type=checkbox].done-todo {
        margin: 5px 5px 2px 0;
    }
</style>
