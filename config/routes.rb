Rails.application.routes.draw do

# Custom auth Routes
    get '/authorized/:id', to: 'users#show'
    get '/all_campgrounds', to: 'campgrounds#index'
    get '/camper/:id/reservations', to: 'reservations#show'
    get '/host/:id/campgrounds', to: 'campgrounds#show'
    post '/signup', to: 'users#create'
    post '/login', to: 'sessions#create'
    post '/add_campground', to: 'campgrounds#create'
    post '/add_site', to: 'sites#create'
    patch '/users/:id/profile/edit', to: 'users#update'
    patch '/campgrounds/:id/edit', to: 'campgrounds#update'
    patch '/reservations/:id/edit', to: 'reservations#update'
    patch '/sites/:id/edit', to: 'sites#update'
    delete '/logout', to: 'sessions#destroy'
    delete  '/camper/reservation/:id', to: 'reservations#destroy'
    delete '/campgrounds/:id', to: 'campgrounds#destroy'
    delete '/sites/:id', to: 'sites#destroy'
end
