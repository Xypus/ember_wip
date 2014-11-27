class Api::CompaniesController < ApplicationController
  respond_to :json

  def index
    respond_with Company.all
  end

  def show
    respond_with company
  end

  def create
    respond_with :api, Company.create(company_params)
  end

  def update
    respond_with company.update(company_params)
  end

  def destroy
    respond_with company.destroy
  end

  private

  def company
    Company.find(params[:id])
  end

  def company_params
    params.require(:company).permit(:name, 
                                    :description, 
                         projects: [:name, :description, :company_id])
  end

end