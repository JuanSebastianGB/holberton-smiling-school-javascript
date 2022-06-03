const handleTopic = () => {
  return $('#dropDownMenuTopics a').on('click', (e) => {
    e.preventDefault();
    const selectedValue = e.target.text;
    localStorage.setItem(
      'topic',
      selectedValue.replace(' ', '_').toLowerCase()
    );
    $('#dropdownMenuButtonTopics').html(selectedValue);
  });
};
const handleSort = () => {
  return $('#dropDownMenuSort a').on('click', (e) => {
    e.preventDefault();
    const selectedValue = e.target.text;
    localStorage.setItem('sort', selectedValue.replace(' ', '_').toLowerCase());
    $('#dropdownMenuButtonSort').html(selectedValue);
  });
};
const handleInputValue = () => {
  return $('#exampleInputEmail1').on('input', (e) => {
    const value = e.target.value;
    localStorage.setItem('search', value);
  });
};

export { handleTopic, handleSort, handleInputValue };
