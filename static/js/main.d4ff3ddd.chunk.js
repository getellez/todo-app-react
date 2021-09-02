(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{150:function(e,t,a){},156:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},228:function(e,t,a){},229:function(e,t,a){},231:function(e,t,a){},232:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),i=a(21),n=a.n(i),l=a(73),o=a(22),d=a(47),r=a(48),j=a(50),h=a(49),O=a(68),b=(a(150),a(4)),m=O.routes.home,u=O.routes.about;function p(e){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)("div",{className:"Menu",children:Object(b.jsxs)("div",{className:"Menu__container",children:[Object(b.jsx)("div",{className:"Menu__container-item",children:Object(b.jsx)(l.b,{to:m,children:"Home"})}),Object(b.jsx)("div",{className:"Menu__container-item",children:Object(b.jsx)(l.b,{to:u,children:"About"})})]})})})}var x=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(p,{}),this.props.children]})}}]),a}(s.Component),v=a(77),A=a(70),f=a(38),g=a(61),k=a(37),C=a(240),S=a(241),N=a(242),T=a(243),M=a(244),w=a(245),y=a(238),D=a(54),Y=a(237),F=(a(156),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={isModalActive:!1,task:{id:void 0,title:"",description:"",completed:!1,date:(new Date).toLocaleDateString("es-co")}},e.handleOpenModal=function(t){e.setState({isModalActive:!0,task:Object(k.a)(Object(k.a)({},e.state.task),{},{title:"",description:""})})},e.handleCloseModal=function(t){e.setState({isModalActive:!1})},e.handleChange=function(t){var a=t.target;e.setState({task:Object(k.a)(Object(k.a)({},e.state.task),{},Object(g.a)({},a.name,a.value))})},e.handleShowAllTasks=function(){var t=JSON.parse(localStorage.getItem("tasks_list"));e.props.updateTasksList(t)},e.handleShowCompletedTasks=function(){var t=JSON.parse(localStorage.getItem("tasks_list")).filter((function(e){return!0===e.completed}));e.props.updateTasksList(t)},e.handleShowPendingTasks=function(){var t=JSON.parse(localStorage.getItem("tasks_list")).filter((function(e){return!1===e.completed}));e.props.updateTasksList(t)},e.handleDeleteAll=function(){localStorage.removeItem("tasks_list"),e.props.updateTasksList([])},e.handleAddNewTask=function(t){t.target;var a=localStorage.getItem("tasks_list"),s=e.state.task,c=Object(k.a)(Object(k.a)({},s),{},{id:Object(C.a)()});a?a.length>=0&&((a=JSON.parse(a)).push(c),localStorage.setItem("tasks_list",JSON.stringify(a)),e.props.updateTasksList(a),e.setState({isModalActive:!1})):(localStorage.setItem("tasks_list",JSON.stringify([c])),e.props.updateTasksList([c]),e.setState({isModalActive:!1}))},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsxs)("div",{className:"Control",children:[Object(b.jsxs)("div",{className:"Control__action",onClick:this.handleOpenModal,children:[Object(b.jsx)("div",{children:Object(b.jsx)(S.a,{twoToneColor:"#009fb7"})}),Object(b.jsx)("p",{className:"Control__action-add",children:"Add new task"})]}),Object(b.jsxs)("div",{className:"Control__action",onClick:this.handleShowCompletedTasks,children:[Object(b.jsx)("div",{children:Object(b.jsx)(N.a,{})}),Object(b.jsx)("p",{children:"Completed"})]}),Object(b.jsxs)("div",{className:"Control__action",onClick:this.handleShowPendingTasks,children:[Object(b.jsx)("div",{children:Object(b.jsx)(T.a,{})}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"Pending"})})]}),Object(b.jsxs)("div",{className:"Control__action",onClick:this.handleShowAllTasks,children:[Object(b.jsx)("div",{children:Object(b.jsx)(M.a,{})}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"Show all"})})]}),Object(b.jsxs)("div",{className:"Control__action",onClick:this.handleDeleteAll,children:[Object(b.jsx)("div",{children:Object(b.jsx)(w.a,{})}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"Delete all"})})]})]}),Object(b.jsx)(y.a,{title:"Add new task",visible:this.state.isModalActive,onOk:this.handleAddNewTask,onCancel:this.handleCloseModal,footer:[Object(b.jsx)(D.a,{type:"primary",onClick:this.handleAddNewTask,form:"ModalForm",children:"Save"},"submit")],children:Object(b.jsxs)("form",{id:"ModalForm",onSubmit:this.handleAddNewTask,className:"Modal",children:[Object(b.jsx)(Y.a,{name:"title",className:"Modal__input",placeholder:"Title",value:this.state.task.title,onChange:this.handleChange}),Object(b.jsx)(Y.a.TextArea,{name:"description",rows:3,className:"Modal__input",placeholder:"Description",value:this.state.task.description,onChange:this.handleChange})]})})]})}}]),a}(s.Component)),I=(a(158),a(235)),G=a(236),J=a(239),V=a(142),H=a(246),q=a(143),K=a(247),Q=(a(159),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).componentDidMount=function(){s.setState({data:s.props.taskData})},s.toggleCompleteTask=function(){var e,t=JSON.parse(localStorage.getItem("tasks_list")),a=Object(v.a)(t);try{for(a.s();!(e=a.n()).done;){var c=e.value;c.id===s.state.data.id&&(c.completed=!c.completed)}}catch(i){a.e(i)}finally{a.f()}localStorage.setItem("tasks_list",JSON.stringify(t)),s.setState({data:Object(k.a)(Object(k.a)({},s.state.data),{},{completed:!s.state.data.completed})})},s.handleEditTask=function(){try{s.setState({isModalVisible:!0})}catch(e){}},s.handleOpenModal=function(){s.setState({isModalVisible:!0})},s.handleCloseModal=function(){s.setState({isModalVisible:!1})},s.handleChange=function(e){var t=e.target;s.setState({data:Object(k.a)(Object(k.a)({},s.state.data),{},Object(g.a)({},t.name,t.value))})},s.handleSubmitEditForm=function(){var e,t=JSON.parse(localStorage.getItem("tasks_list")),a=Object(v.a)(t);try{for(a.s();!(e=a.n()).done;){var c=e.value;c.id===s.state.data.id&&(c.title=s.state.data.title,c.description=s.state.data.description)}}catch(i){a.e(i)}finally{a.f()}localStorage.setItem("tasks_list",JSON.stringify(t)),s.setState({isModalVisible:!1})},s.state={data:{id:void 0,completed:!1,date:void 0,title:"",description:""},isModalVisible:!1},s}return Object(r.a)(a,[{key:"render",value:function(){var e,t=I.a.Meta,a=G.a.Text,s=this.state.data.completed?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAE6ElEQVRoge2aT2xUVRTGf+e+saXt1IXEkrIwkfAnkKiVAYOWpOm0JCBQZEEjTGMUowuJGoOJ20l041IM6oaF2AGjC+WPNArtlIQKKEXEmEhC1MSYStGY2GmLQ+ceF8yUYea9mXnTeWgM3/Lce879vrn3nnvufQN38D9GNJF6tas/tTvIMSSowNEDU9tR7QdEVJ8Z7Au/H8Q4gQiIHpiIouYYUJ81XVd0czIW/rzWY/kW0L1/+j7r2KSgRwWOzCxsGh7ulJlce2diMiJIErS5wHXKqnQN9zWeyRnicTUnl0w9LLAZ2BYysv6L7Y2/BCqgKzH1pKIH80zjIhy1ymFH9UcrchxY4OF+xaiuy4gsMkKPKpuAlptkZPtgrPFDP3xCfgVYdG2B6hZVdgrstFL291hgRS4KoFrcqGg74EuA8dM569Du18cHfMf2tYTa911trp/X+Cfg+B2oQmTq9do9A33z/6rUwdcMzGtoWENw5AGc61L/iB+Himagfd/V5nkNDWtQ2aWwpTpuFRM6hOjea9PTZ0aevXeigv7FWHdwcmFGiaDSDroWWA3U1ZpsGWSASwKnLDqC6GhyR/P3hZ1cs1DGyhDoMnBJFbcPDrBCYYUgz6PmB2B5YSfXPaDCoaDZFWJhuOx2dOXk7mU5PEc+vtDWYni9o47e5SWOJePOyVVAx+WG0yi/1YZeabS1GF5cXUfIwMbFIS8R4/OdhrNuDa4C4nGxYjhWS6JuiLQaXsqSz2H9ohCtBctJ4cjHvZJxi+G58Gwm2H3Q1mJ4YWUdTh6DjIW959OMpewtfaXEnvRcdI7oTzag68KqVm/yo2O2qL+x+rNXLNcZ6ExMRrJVZc3hlzyAFTnemZiMuLUVCYgemIgKDOFdEleNashnsUDgZLR/ckNhwy0CuhKpGGoGgLsrIVRB7p5FpHryOTQhfNrZn9qRb5wN15WYelmR/VRYMmxdGuKNjjoireVFrGo17Job+RzqRKQ/mki9ViTAD7YuDfHEshCOgV0rS4uYw7KpCLNhB2ONbwn6FJAu5dAaNmxecjN5lRIRAPm0qvYNxcJv5gxFeTL7ovAJJfZB/umZg1V475s0Z3+1QZGfRNk21Nc0kG90TfQ3Xhb4jBKZqJSIjKXW5K8obEzGmkYLGzxPqu7+1ANW5GKpqBGPzQkU2d45n+ZclWveqD54oi/8nWubl1NGZFG5wKNjlj1fp5nJ4+WYYvJ750AeIKNyv1ebpwCp8Op4YdzydoGI2YFrlG2M483FoxpVAzxe6QBuImqZKlXZtO0jdX1McBVwaum1x/BZSuSLqCX5LFp+T0+vcWtwrUbVak81heiFccu7528cIzUkfwOGHmCk2OwCFXqqHefcmJ3ThvWCqN3qZnedAcdo9L/2rOIQOuXW6f/5sOWF7kSq2xLMRScHVe1O9oUHK+3vqxqduavpDDBTtmP1yKT/nv7Kj4MvAcO9kgJcj/Qa4dtKlk0+qrkPFKWymkH9x/YtQJDCQf4A+QCkV622lXkQuyqiDxl0naB7BMbKxC4L35+YHMPIjJVLKhzCcrjjcsPpeFxmE39nYnKT+0c+mVB0w9COcK7CPRGP6ysnF08/iqFHlC2Ow5d++QTy8NOVmOhUzAC34TNrVXfichiMNScFeRqwgIrqc0GQDxxd/andQf/V4A7+bfwDRzAfTfHE7vwAAAAASUVORK5CYII=":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADUElEQVRoge3aSYgdRRzH8Y+ZxRiToGaciHtEcYM4okYJCG4Hk4O4gDuYgyfJSTx4FBQR4gYaFfEkeFRcyAKiYoSYICIYSEw0KmI0YIg6KiY6M/FQ75nuej1v3ut1xPlCH4qq+v9/1f/u2pljdnFMibYW4yqsxAqciiU4CUP4HQfwFXbhI2zBwRI15GYQN+EdTOBIn88ENuNeDNesHaEBD2BfD2J7ffbhQRxbVyOux44SGxA/X2JVlQ0YxJOY6iJiB9bjHozhdCxo1T0Ry3Fby85nXexMtewcV3YjluKDaZz+gudwSQ67F2Adfp3G9jaMFtT+L0uxO8PJBF7CSAk+TsDT+CvDz16cWdTBEnw+jfHLixrPYAw7M/ztwSl5jQ5ha4bRTcLYUBXH4+0Mvx/L2aM9nmHsdQyUIHYmBvBqhv8X+jV0DSYjI5vVO2gN4q1IwxRu6NXAAL6IDHwjTEHqZrEwnYn/z55e6H1RxUkhQk0xprM3WztTpSFhUpestL46jT3zrLSmHwSt03JHVOGQMDo3zQjGpbXd3q3CRrMvGm3iqGzqVvjnqPDyqtX1wUXS2g7r0gF9mCj4Xh3q+iQe9W9uZ8SD20Zh1bgFD+GPmgT2yrnCKrTNXrzfkJZC3C0dkQ3tjHlNKcrJzihdeFbcFKPSETnQzkhGZKHQxa3DeXWq64Of8H0i/V1WoQ2OtvTdGkTl5WpsF7aTLs0qsF86bCfXJq0Ekp9WvFE2G6YmPZNsyNdR3vl1CilKsiHbG1NRMvPxifB/vKmhLcwyGVbPunyO/y0juFPYs/3PMoo/hR9/Py5rVk5+1kqP8ruxqFFFOblC5/HBG40qKsCLOrcsL6zJ9zw8JaxQP8XZRYwlB8gjwj+zsKDAXok/7VdmqtBthXgIq4U1yjasEU5m6+DKKD1ZpbP5Qm+2oALbq/G3o3u9Z1TgA+F8ZE/L0TieyensNDwqfDrnRHkX4xYVnCMmWaOzIzjYEtYry/Btov64AtHNu4sSr10IM4DrEulhPI/fBJGPROWvxVmJ9CLhtkTt3C99YeCw9GLsRumITQpHBG1WCh1KO/81DW5PDeMuPCbcP0lyq87Pb1lUZgWeEK5wDFaqtCAvC4Paj3i4YS1z1Mo/vnNKQ9k91hIAAAAASUVORK5CYII=";return e=this.state.data.status?Object(b.jsx)(H.a,{onClick:this.toggleCompleteTask},"complete"):Object(b.jsx)(V.a,{onClick:this.toggleCompleteTask},"complete"),Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsxs)(I.a,{className:"Task",actions:[e,Object(b.jsx)(q.a,{onClick:this.handleEditTask},"edit"),Object(b.jsx)(K.a,{},"delete")],children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(a,{type:"secondary",children:Object(b.jsx)("p",{children:Object(b.jsxs)("small",{children:["Status: ",this.state.data.completed?"completed":"pending"]})})}),Object(b.jsx)(a,{type:"secondary",children:Object(b.jsxs)("small",{children:["Created: ",this.state.data.date]})})]}),Object(b.jsx)(t,{style:{marginTop:"5px"},avatar:Object(b.jsx)(J.a,{src:s}),title:this.state.data.title,description:this.state.data.description})]}),Object(b.jsx)(y.a,{title:"Basic Modal",visible:this.state.isModalVisible,onOk:this.handleOpenModal,onCancel:this.handleCloseModal,footer:[Object(b.jsx)(D.a,{type:"primary",onClick:this.handleSubmitEditForm,form:"ModalForm",children:"Save"},"submit")],children:Object(b.jsxs)("form",{children:[Object(b.jsx)(Y.a,{name:"title",className:"Modal__input",placeholder:"Title",value:this.state.data.title,onChange:this.handleChange}),Object(b.jsx)(Y.a.TextArea,{name:"description",rows:3,className:"Modal__input",placeholder:"Description",value:this.state.data.description,onChange:this.handleChange})]})})]})}}]),a}(s.Component)),_=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).updateVisibleTasks=function(e){s.setState({tasks:e})},s.toggleCompleteTask=function(e){var t,a=JSON.parse(localStorage.getItem("tasks_list")),c=Object(v.a)(a);try{for(c.s();!(t=c.n()).done;){var i=t.value;i.id===e&&(i.completed=!i.completed)}}catch(n){c.e(n)}finally{c.f()}localStorage.setItem("tasks_list",JSON.stringify(a)),s.updateVisibleTasks(a)},s.componentDidMount=function(){var e=localStorage.getItem("tasks_list");e&&e.length>0&&s.setState({tasks:JSON.parse(e)})},s.state={loading:!1,tasks:[]},s}return Object(r.a)(a,[{key:"render",value:function(){return console.log("Se acaba de renderizar la lista de tareas."),Object(b.jsx)("div",{className:"List",children:Object(b.jsx)(A.a,{children:Object(b.jsx)(f.a,{span:8,offset:8,children:Object(b.jsxs)("div",{className:"List__container",children:[Object(b.jsx)(F,{updateTasksList:this.updateVisibleTasks}),0===this.state.tasks.length?Object(b.jsx)("p",{className:"empty",children:"En estos momentos no hay tareas "}):this.state.tasks.map((function(e){return Object(b.jsx)(Q,{taskData:e},e.id)}))]})})})})}}]),a}(s.Component);a(228);function L(e){return Object(b.jsxs)("div",{className:"Home",children:[Object(b.jsxs)("div",{className:"Home__header",children:[Object(b.jsx)("h1",{className:"Home__header-title",children:"To-Do App"}),Object(b.jsx)("p",{className:"Home__header-description",children:"You can add, edit, remove, update tasks that you need to do."})]}),Object(b.jsx)(_,{})]})}a(229);function R(e){return Object(b.jsx)("div",{children:Object(b.jsx)(A.a,{children:Object(b.jsx)(f.a,{offset:8,sm:8,children:Object(b.jsxs)("div",{className:"Header",children:[Object(b.jsx)("div",{className:"Header__picture",children:Object(b.jsx)(J.a,{size:{xs:24,sm:32,md:40,lg:200,xl:200,xxl:200},src:"https://avatars.githubusercontent.com/u/85968117?s=400&u=0fd103391c0d5f953421d3c864c8bedfc7289ff2&v=4"})}),Object(b.jsxs)("div",{className:"Header__info",children:[Object(b.jsx)("h1",{children:"Germ\xe1n T\xe9llez Vanegas"}),Object(b.jsx)("p",{children:"Software Engineer"}),Object(b.jsx)("p",{children:"Cartagena, Colombia"})]})]})})})})}a(230);var E=O.routes.home,P=O.routes.about;var B=function(){return Object(b.jsx)(l.a,{children:Object(b.jsx)(x,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:E,component:L}),Object(b.jsx)(o.a,{exact:!0,path:P,component:R})]})})})};a(231);n.a.render(Object(b.jsx)(B,{}),document.getElementById("root"))},68:function(e,t){e.exports={routes:{home:"/",about:"/about"}}}},[[232,1,2]]]);
//# sourceMappingURL=main.d4ff3ddd.chunk.js.map