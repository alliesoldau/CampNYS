Rails.application.routes.draw do

# Custom auth Routes
    get '/authorized/:id', to: 'users#show'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    get '/hello', to: 'application#hello_world'
    
end
