module UsersHelper

  def user_name(obj)
  "#{obj.user.first_name} " + "#{obj.user.last_name}" 
  end

end