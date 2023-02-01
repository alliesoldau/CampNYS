Rails.application.routes.draw do

# Custom auth Routes
    # authorize user
    get '/authorized', to: 'users#show'
    post '/login', to: 'sessions#create'

  
end
