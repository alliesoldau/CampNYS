Rails.application.routes.draw do

# Custom auth Routes
    get '/authorized/:id', to: 'users#show'
    get '/all_campgrounds', to: 'campgrounds#index'
    get '/camper/:id/reservations', to: 'reservations#show'
    get '/host/:id/campgrounds', to: 'campgrounds#show'
    post '/signup', to: 'users#create'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    delete  '/camper/reservation/:id', to: 'reservations#destroy'
end
