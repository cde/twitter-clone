class FollowersController < ApplicationController
  
  def random
    @users = 
      current_user.present? ? User.where("id != ?", current_user.id).all : []
    render json:   @users 
  end
  
  def create
    follower = Follower.create( user_id: params(user_id), 
                               followed_by: current_user.id)
    render json: follower                          
  
  end
end
