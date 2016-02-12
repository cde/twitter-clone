class Tweet < ActiveRecord::Base
  belongs_to :user
  
  default_scope {order(created_at: :desc)}
  
  def as_json(options={})
    super(methods: [:name])
  end
  
  def name
    user.display_name
  end 
end
