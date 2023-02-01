Rails.application.routes.draw do

# Custom auth Routes
    get '/authorized', to: 'users#show'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    
end
