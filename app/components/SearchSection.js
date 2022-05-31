export const SearchSection = (props) => {
  const { queryInputId, topicId, sortId } = props;
  const $search = document.createElement('section'),
    $root = document.getElementById('root');
  $root.appendChild($search);
  $search.classList.add('filter-section', 'bg-purple', 'p-5');
  $search.innerHTML = `
  <div class="container">
      <div class="row text-white">
          <div class="col-sm-12 col-md-12 col-lg-4">
              <div class="text-uppercase font-size-12 font-weight-bold mb-2">Keywords</div>
              <div class="input-group border-bottom">
                  <span class="input-group-addon icon-search">
                      <div class="holberton_school-icon-search_1"></div>
                  </span>
                  <input type="text"
                      class="form-control border-top-0 lightpurple-bg text-white border-0 search-form"
                      id="${queryInputId}" aria-describedby="emailHelp" placeholder="Search by keywords">
              </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
              <div class="text-uppercase font-size-12 font-weight-bold mb-2">TOPIC</div>
              <div class="input-group border-bottom">
                  <div class="dropdown">
                      <div class="rounded-top text-white border-bottom dropdown-toggle dropdown-spacing"
                          type="button" id="dropdownMenuButton-${topicId}" data-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          Novice
                      </div>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton-${topicId}" id = '${topicId}'>
                          <a class="dropdown-item" href="#">Novice</a>
                          <a class="dropdown-item" href="#">Intermediate</a>
                          <a class="dropdown-item" href="#">Expert</a>
                          <a class="dropdown-item" href="#">All</a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
              <div class="text-uppercase font-size-12 font-weight-bold mb-2">SORT BY</div>
              <div class="input-group border-bottom">
                  <div class="dropdown">
                      <div class="rounded-top text-white border-bottom dropdown-toggle dropdown-spacing"
                          type="button" id="dropdownMenuButton-${sortId}" data-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          Most Popular
                      </div>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton-${sortId}" id='${sortId}'>
                          <a class="dropdown-item" href="#">Most Popular</a>
                          <a class="dropdown-item" href="#">Most Recent</a>
                          <a class="dropdown-item" href="#">Most Viewed</a>
                      </div>
                  </div>
              </div>
          </div>

      </div>
  </div>
  `;
};
