import { defineConfig } from "vite";  // defineconj el ben7ot feha el objevt bet3t el configuration // import defineconfig -->function -->this function have to export
import react from '@vitejs/plugin-react'

export default defineConfig({// the function have to export if it is only one function it is called default
  plugins : [react()] , //plugs it will manage what react or angular or viewor vaniala. pluggings is dependancies
  server : {
    port : 5000 // the server will run on port 5000
}
})