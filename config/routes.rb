Rails.application.routes.draw do

# Custom auth Routes
    get '/authorized/:id', to: 'users#show'
    post '/signup', to: 'users#create'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    
end
