class Api::UsersController < ApplicationController
  respond_to :json

  def index
    respond_with User.all
  end

  def show
    respond_with user
  end

  def create
    respond_with :api, User.create(user)
  end

  def update
    respond_with user.update(user)
  end

  def destroy
    respond_with user.destroy
  end

  private

  def user
    User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

end