class CompaniesController < ApplicationController
  before_filter :authenticate_user!, except: [:index, :show]



  def index
    @companies = Company.all
  end

  def show
  end

  def new
  end

  def edit
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
    
    def company_params
      params.require(:company).permit(:name, :description, :user_id)
    end
end
