class ProjectsController < ApplicationController

  def index
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

    def project_params
      params.require(:project).permit(:name, :description, :company_id)
    end
end
