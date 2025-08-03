module Jekyll
    module Filters
      alias_method :original_relative_url, :relative_url
  
      def relative_url(input)
        return if input.nil?
        site = @context.registers[:site]
        baseurl = site.baseurl || ''
        path = ensure_leading_slash(input.to_s)
        url = File.join(baseurl, path)
  
        # Customize this method to determine which URLs should have the version parameter
        if should_append_version?(path)
          timestamp = site.time.to_i
          "#{url}?v=#{timestamp}"
        else
          url
        end
      end
  
      private
  
      def ensure_leading_slash(input)
        input.start_with?('/') ? input : "/#{input}"
      end
  
      def should_append_version?(path)
        # Define the file extensions or paths you want to target
        asset_extensions = %w(.css .js .png .jpg .jpeg .gif .svg)
        asset_extensions.any? { |ext| path.end_with?(ext) }
      end
    end
  end
  