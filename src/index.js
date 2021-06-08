import store from './store'
import * as action from './actions'

const app = document.getElementById('app')
const input = document.createElement('input')
const button = document.createElement('button')
const list = document.createElement('ul')

function listItemClicked (event) {
    if (!event.target.id) return
    const complete = event.target.dataset.complete
    if (complete === 'false') {
        store.dispatch(
            action.itemComplete(
                { id: Number(event.target.id) }
            )
        )
    } else {
        store.dispatch(
            action.itemRemoved(
                { id: Number(event.target.id) }
            )
        )
    }
    
    updateList()
}

function updateList() {
    list.innerHTML = ''
    store.getState().map(item => {
        const listItem = document.createElement('li')
        listItem.textContent = `${item.description} ${item.resolved ? ' : delete?' : ' : done?'}`
        listItem.style.backgroundColor = `${item.resolved ? 'lightgreen' : 'lightgrey'}`
        listItem.style.display = 'block'
        listItem.dataset.complete = `${item.resolved}`
        listItem.id = item.id
        listItem.onclick = listItemClicked
        list.append(listItem)
    })
}

function addButtonClicked() {
    if (!input.value) return
    input.value && store.dispatch(
        action.itemAdded({description: input.value})
    )
    input.value = ''
    updateList()
}

function buildUi() {
    input.type = 'text'
    input.placeholder = 'to do?'

    button.textContent = 'add'
    button.onclick = addButtonClicked

    list.style.display = 'block'

    app.append(input, button, list)
}

buildUi()
