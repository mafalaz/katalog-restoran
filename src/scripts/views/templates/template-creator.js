import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (restaurant) => `
  <h2 class="movie__title">${restaurant.name}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="movie__info">
  <h3>Informasi Restoran</h3>
    <h4>Alamat Lengkap:</h4>
    <p>${restaurant.address}</p>
    <h4>Kategori Menu:</h4>
    <p>${restaurant.categories.map((kategori) => kategori.name)}</p>
    <h4>Menu Makanan:</h4>
    <p>${restaurant.menus.foods.map((food) => food.name)}</p>
    <h4>Menu Minuman:</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name)}</p>
    <div class="restaurantInfo">
      <h4>Customer Reviews:</h4>
      ${restaurant.customerReviews.map((review) => `
        <div class="restaurantInfoList">
            <p tabindex="0">${review.name}</p>
            <p tabindex="0" class="date-review">${review.date}</p>
            <p tabindex="0">${review.review}</p>
        </div>
        `).join('')}
    </div>
    <h4>Rating:</h4>
    <p>${restaurant.rating}</p>
  </div>
</div>
`;

const createMovieItemTemplate = (restaurants) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <figure>
        <img class="movie-item__header__poster" alt="${restaurants.name}"
            src="${CONFIG.BASE_IMAGE_URL}${restaurants.pictureId}">
      </figure>
        <div class="movie-item__header__rating">
            <p>⭐️<span class="movie-item__header__rating__score">${restaurants.rating}</span></p>
        </div>
    </div>
    <div class="movie-item__content">
        <h3><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name} - ${restaurants.city}</a></h3>
        <p>${restaurants.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMovieItemTemplate,
  createMovieDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
