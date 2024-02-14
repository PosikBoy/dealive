import orderFormStore from "./order-form-store";
import profileInfoStore from "./profile-store";
import reviewFormStore from "./review-form-store";
class RootStore {
  orderForm = orderFormStore;
  profileInfo = profileInfoStore;
  reviewForm = reviewFormStore;
}

export default RootStore;
