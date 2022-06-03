import loadData from './renderDynamicData.js';

const handleTopic = () => {
  return $('#dropDownMenuTopics a').on('click', (e) => {
    e.preventDefault();
    const selectedValue = e.target.text;
    localStorage.setItem(
      'topic',
      selectedValue.replace(' ', '_').toLowerCase().trim()
    );
    $('#dropdownMenuButtonTopics').html(selectedValue);
    loadData.renderCourses();
  });
};
const handleSort = () => {
  return $('#dropDownMenuSort a').on('click', (e) => {
    e.preventDefault();
    const selectedValue = e.target.text;
    localStorage.setItem(
      'sort',
      selectedValue.replace(' ', '_').toLowerCase().trim()
    );
    $('#dropdownMenuButtonSort').html(selectedValue);
    loadData.renderCourses();
  });
};
const handleInputValue = () => {
  return $('#exampleInputEmail1').on('input', (e) => {
    const value = e.target.value;
    localStorage.setItem('search', value.trim());
    loadData.renderCourses();
  });
};

export { handleTopic, handleSort, handleInputValue };
