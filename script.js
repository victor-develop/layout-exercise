function toggleMenu() {
  const collapse = ['navbar-collapse', 'collapse'];
  const classList = document.getElementById("navbar")
  .classList;
  if (collapse.filter(c => classList.contains(c)).length > 0) {
    collapse.forEach(c => classList.remove(c));
  } else {
    collapse.forEach(c => classList.add(c));
  }
}
