# _plugins/ruby_fix.rb

# Fix for String objects (Jekyll 3.9 / Liquid 4)
class String
  def untaint; self; end
  def taint; self; end
  def tainted?; false; end
end

# Fix for nil objects (The new error you just hit)
class NilClass
  def tainted?; false; end
  def untaint; self; end
end

# Fix for any other object Liquid might check
class Object
  def tainted?; false; end
  def untaint; self; end
end

puts "--- [PLUGIN] Universal Ruby 4.0 Compatibility Shim Loaded ---"

require 'openssl'
OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE

require 'openssl'
module OpenSSL
  module SSL
    remove_const :VERIFY_PEER
    VERIFY_PEER = VERIFY_NONE
  end
end