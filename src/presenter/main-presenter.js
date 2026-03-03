import CreationFormView from '../view/creation-form-view.js';
import EventsListView from '../view/events-list-view.js';
import EditingFormView from '../view/editing-form-view.js';
import RoutePointView from '../view/route-point-view.js';
import {render} from '../render.js';

export default class MainPresenter {
  eventsListComponent = new EventsListView();

  constructor({eventsListContainer, pointsModel}) {
    this.eventsListContainer = eventsListContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    const eventsListPoints = this.pointsModel.getPoints();
    const eventsListDestinations = this.pointsModel.getDestinations();

    render(this.eventsListComponent, this.eventsListContainer);

    if (eventsListPoints.length > 0) {
      const firstPoint = eventsListPoints[0];
      const destination = this.pointsModel.getDestinationById(firstPoint.destination);
      const offers = this.pointsModel.getOffersByIds(firstPoint.offers);
      const allOffersByType = this.pointsModel.getOffersByType(firstPoint.type);

      render(new EditingFormView({
        point: firstPoint,
        destination: destination,
        offers: offers,
        allDestinations: eventsListDestinations,
        allOffers: allOffersByType
      }), this.eventsListComponent.getElement());
    }

    render(new CreationFormView({
      allDestinations: eventsListDestinations,
      allOffers: this.pointsModel.getOffersByType('flight')
    }), this.eventsListComponent.getElement());

    for (let i = 1; i < eventsListPoints.length; i++) {
      const point = eventsListPoints[i];
      const destination = this.pointsModel.getDestinationById(point.destination);
      const offers = this.pointsModel.getOffersByIds(point.offers);

      render(new RoutePointView({
        point: point,
        destination: destination,
        offers: offers
      }), this.eventsListComponent.getElement());
    }

  }
}

