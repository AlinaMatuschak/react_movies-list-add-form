(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},13:function(e,t,a){e.exports=a(25)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(9),l=a.n(i),s=(a(18),a(12)),o=a(4),c=a(5),m=a(7),d=a(6),u=(a(19),a(20),a(21),function(e){var t=e.title,a=e.description,r=e.imgUrl,i=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:r,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:i},"IMDB"))))});u.defaultProps={description:""};var h=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(u,Object.assign({key:e.imdbId},e))})))};h.defaultProps={movies:[]};var p=a(3),v=a(1),b=(a(22),a(10)),g=a.n(b),f=a(2),w=a.n(f),j={name:w.a.string.isRequired,value:w.a.string,handleChange:w.a.func.isRequired,handleBlur:w.a.func.isRequired,textError:w.a.string},M=n.a.memo((function(e){var t=e.name,a=e.value,r=e.handleChange,i=e.handleBlur,l=e.textError;return n.a.createElement("div",null,n.a.createElement("label",{className:"form-group row"},t[0].toUpperCase()+t.slice(1),n.a.createElement("input",{name:t,placeholder:"Enter ".concat(t),className:g()("form-control",{"is-invalid":l}),value:a,onChange:r,onBlur:i,"aria-describedby":"validationFeedback",autoComplete:"off"}),n.a.createElement("div",{id:"validationFeedback",className:"invalid-feedback"},l)))}));M.propTypes=j,M.defaultProps={value:"",textError:null};w.a.func.isRequired;var E=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,O={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},y=Object.keys(O).filter((function(e){return"title"===e||"imgUrl"===e||"imdbUrl"===e||"imdbId"===e})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(p.a)({},t,null))}),{}),N=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={values:O,errors:y},e.handleChange=function(t){var a=t.target,r=a.value,n=a.name;e.setState((function(e){return{values:Object(v.a)(Object(v.a)({},e.values),{},Object(p.a)({},n,r))}}))},e.handleSubmit=function(t){t.preventDefault(),e.props.addMovie(e.state.values),e.setState({values:O})},e.handleBlur=function(t){var a=t.target,r=a.name,n=a.value,i=e.state.errors;Object.prototype.hasOwnProperty.call(i,r)&&(e.setState((function(e){return{errors:Object(v.a)(Object(v.a)({},e.errors),{},Object(p.a)({},r,n?null:"The ".concat(r," is required")))}})),n&&r.includes("Url")&&e.setState((function(e){return{errors:Object(v.a)(Object(v.a)({},e.errors),{},Object(p.a)({},r,E.test(n)?null:"Please enter a valid url"))}})))},e.isDisabledButton=function(){var t=e.state.values,a=t.title,r=t.imgUrl,n=t.imdbUrl,i=t.imdbId,l=Object.values(e.state.errors).some((function(e){return e}));return!i||!n||!r||!a||l},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.errors,r=t.values;return n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("h3",{className:"form-group row"},"Add film"),Object.keys(r).map((function(t){return n.a.createElement(M,{key:t,name:t,value:r[t],handleChange:e.handleChange,handleBlur:e.handleBlur,textError:a[t]})})),n.a.createElement("button",{type:"submit",className:"btn btn-primary form-group row",disabled:this.isDisabledButton()},"Add film"))}}]),a}(r.Component),B=a(11),k=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={movies:B},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(s.a)(e.movies),[t])}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(h,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(N,{addMovie:this.addMovie})))}}]),a}(r.Component);l.a.render(n.a.createElement(k,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.2b6f1198.chunk.js.map