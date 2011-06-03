def lily_sources
  sources = ['src/base.js','src/scenario.js', 'src/step.js']
  sources += Dir.glob('src/*.js').reject { |f| sources.include? f }.sort
  return sources
end

namespace :lily do
  task :build do
    File.open('lib/lily.js','w') do |lily|
      lily_sources.each do |file_name|
        lily.puts File.read(file_name)
      end
    end
  end

  namespace :build do
    task :drivers do
      Dir.glob('src/drivers/*').each do |full_path|
        directory = full_path.split('/').last
        # build driver
        File.open("lib/drivers/#{directory}.js",'w') do |driver|
          Dir.glob("#{full_path}/*.js").sort.each do |file_name|
            driver.puts File.read(file_name)
          end
        end
      end
    end
  end
end
