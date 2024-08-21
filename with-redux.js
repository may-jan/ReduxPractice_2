function reducer(state, action) {
  let newState;
  if (state === undefined) {
    newState = { color: 'gray' };
  } else if (action.type === 'CHANGE_COLOR') {
    // 원본을 복제 → 복제한 것을 변경 → 변경한 것을 return
    newState = Object.assign({}, state, { color: action.color });
  }
  return newState;
}

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function red() {
  const state = store.getState();
  document.querySelector('#red').innerHTML = `
    <div class='container' id='component_red' style="background-color:${state.color}">
        <h1>red</h1/>
            <input type="button" value="fire" onClick="
             store.dispatch({type:'CHANGE_COLOR', color:'red'}) "/>
        </div>`;
}
red();

function blue() {
  const state = store.getState();
  document.querySelector('#blue').innerHTML = `
      <div class='container' id='component_red' style="background-color:${state.color}">
          <h1>blue</h1/>
              <input type="button" value="fire" onClick="
               store.dispatch({type:'CHANGE_COLOR', color:'blue'}) "/>
          </div>`;
}
blue();

function green() {
  const state = store.getState();
  document.querySelector('#green').innerHTML = `
        <div class='container' id='component_red' style="background-color:${state.color}">
            <h1>green</h1/>
                <input type="button" value="fire" onClick="
                 store.dispatch({type:'CHANGE_COLOR', color:'green'}) "/>
            </div>`;
}
green();

store.subscribe(red);
store.subscribe(blue);
store.subscribe(green);
