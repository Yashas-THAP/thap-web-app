interface ICutoffOptions {
    cutoffOptionId: string
    day: string
    time: string
    label: string
}

type TherapistUserState = {
    therapistLoader: boolean
    therapistLoader: boolean
    therapistId? : string
    therapistName? : string
    therapistDp? : string
    therapistType? : string
    therapistRating? : string
    therapistLanguages : string[]
    therapistTherapyMethods : string[]
    therapistCategories: string[]
    therapistCutoffOptions: ICutoffOptions[]
    therapistIntro: string
    therapistVideo: string
  };
  
type TherapistUserAction = {
    type: string;
    therapistLoader: boolean
    therapistId? : string
    therapistName? : string
    therapistDp? : string
    therapistType? : string
    therapistRating? : string
    therapistLanguages : string[]
    therapistTherapyMethods : string[]
    therapistCategories: string[]
    therapistCutoffOptions: ICutoffOptions[]
    therapistIntro: string
    therapistVideo: string
  };
