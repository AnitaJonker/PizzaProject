
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :books
    end
  end
  resources :travel
end
#   # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

#   # Defines the root path route ("/")
#   /# root "articles#index"
#   root to: 'travel#index'
#   get '/search' => 'travel#search'
# end

# Rails.application.routes.draw do
  
  # get 'travel'
  # resources :spa
  # get 'spa', to: 'spa'
  # root 'travel#index'
  # get '/search' => 'travel#search'
# end