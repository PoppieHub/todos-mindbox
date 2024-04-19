import React from 'react';
import {
    InputTodo,
    TaskList,
    Title
} from "../components";
import {ManagerTools} from "../containers";
import {TodosPages} from "../models";

const Todos: React.FC<TodosPages> = (props) => {

    return (
        <div className="container">
          <div className="container__content">
              <header className="container__contentHeader">
                  <Title title={`todos`} />
              </header>
              <section className="container__contentBody">
                  <InputTodo typeInput={props.typeInput} setTypeInput={props.setTypeInput} onDownEnterHandler={props.onDownEnterHandler}/>
                  <TaskList
                      collectionTask={props.collectionTask}
                      onClickTask={props.onClickTask}
                  />
              </section>
              <footer className="container__contentFooter">
                  <ManagerTools
                      tasks={props.tasks}
                      clearCompletedTaskHandler={props.clearCompletedTaskHandler}
                      selectFilteredHandler={props.selectFilteredHandler}
                  />
              </footer>
          </div>
    </div>
    );
}

export default Todos;
