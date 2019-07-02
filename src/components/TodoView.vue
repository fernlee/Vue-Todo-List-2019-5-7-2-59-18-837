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
            <li :key="todo.title" v-for="todo in todoList" :class="{checked: todo.completed}">
                <input name="done-todo" type="checkbox" class="done-todo" :checked="todo.completed"> {{todo.title}}
            </li>
        </ol>
        <div>
            <ul id="filters">
                <li :key="filterType" v-for="filterType in filterTypes">
                    <a href="#" :data-filter="filterType" :class="{selected: filterType === selectedFilterType}"
                       @click="selectedFilterType=filterType">
                        {{filterType}}
                    </a>
                </li>
            </ul>

        </div>

    </div>
</template>

<script>
    import store from "../store/store.js";

    export default {
        name: 'TodoView',
        props: {
            msg: String
        },
        data() {
            return {
                todoList: store.fetchTodos(),
                filterTypes: ['all', 'active', 'completed'],
                selectedFilterType: 'all'
            }
        },
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

    #filters li a {
        text-transform: capitalize;
    }

    .checked {
        color: #999;
        text-decoration: line-through;
    }

    input[type=checkbox].done-todo {
        margin: 5px 5px 2px 0;
    }
</style>
