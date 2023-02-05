Rails.application.routes.draw do

# Custom auth Routes
    get '/authorized/:id', to: 'users#show'
    get '/all_campgrounds', to: 'campgrounds#index'
    get '/camper/:id/reservations', to: 'reservations#show'
    get '/host/:id/campgrounds', to: 'campgrounds#show'
    post '/signup', to: 'users#create'
    post '/login', to: 'sessions#create'
    patch '/users/:id/profile/edit', to: 'users#update'
    patch '/campgrounds/:id/edit', to: 'campgrounds#update'
    delete '/logout', to: 'sessions#destroy'
    delete  '/camper/reservation/:id', to: 'reservations#destroy'
    delete '/campgrounds/:id', to: 'campgrounds#destroy'
end
