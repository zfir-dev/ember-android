import android.content.Context
import android.util.Log
import fi.iki.elonen.NanoHTTPD
import java.io.InputStream

class WebServer(private val context: Context, port: Int) : NanoHTTPD(port) {

    override fun serve(session: IHTTPSession): Response {
        val uri = if (session.uri == "/" || session.uri.isEmpty()) {
            "ember-dist/index.html"
        } else {
            "ember-dist/${session.uri.trimStart('/')}"
        }

        return try {
            val assetManager = context.assets
            val inputStream: InputStream = assetManager.open(uri)
            val mimeType = getMimeType(uri)
            newChunkedResponse(Response.Status.OK, mimeType, inputStream)
        } catch (e: Exception) {
            newFixedLengthResponse(Response.Status.NOT_FOUND, "text/plain", "File Not Found")
        }
    }

    private fun getMimeType(fileName: String): String {
        return when {
            fileName.endsWith(".html") -> "text/html"
            fileName.endsWith(".css") -> "text/css"
            fileName.endsWith(".js") -> "application/javascript"
            fileName.endsWith(".png") -> "image/png"
            fileName.endsWith(".jpg") || fileName.endsWith(".jpeg") -> "image/jpeg"
            else -> "application/octet-stream"
        }
    }
}
