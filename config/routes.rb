Rails.application.routes.draw do

# Custom auth Routes
    # authorize user
    get '/authorized', to: 'users#show'
  
end
