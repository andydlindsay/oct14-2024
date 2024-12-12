class Author < ApplicationRecord
  validates :full_name, presence: true

  has_many :books # author.books
end
