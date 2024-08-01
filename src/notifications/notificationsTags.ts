import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate(){
	OneSignal.User.addTags({
		user_name: "Caroline Vieira",
		user_email: "carolinesanvieira@gmail.com"
	})
}

export function tagCartUpdate(itemCount: string){
	OneSignal.User.addTag("cart_items_count", itemCount)
}