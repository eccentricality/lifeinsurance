import M from 'materialize-css';
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelector('.dropdown-trigger');
//     var instances = M.Dropdown.init(elems, options);
//   });

var elems = document.querySelector('.dropdown-trigger');
// var instances = M.Dropdown.init(elems, options);

elems.addEventListener('click', () => {
    M.Dropdown.init(elems, options);
});