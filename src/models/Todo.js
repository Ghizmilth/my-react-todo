import $ from 'jquery-ajax'


class TodoModel {
  static all(){
    let request = $.ajax({
      url: "https://super-crud.herokuapp.cpm/todos",
      method: 'GET'
          })
          return request
  }
}


export default TodoModel 
