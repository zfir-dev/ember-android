package dev.zfir.ember_android


import android.content.Context
import android.webkit.JavascriptInterface
import android.widget.Toast

class EmberAndroidToast(private val context: Context) {
    @JavascriptInterface
    fun showToast(params: Map<String, Any?>) {
        val message: String = (params["message"] ?: "").toString()
        Toast.makeText(context, message, Toast.LENGTH_SHORT).show()
    }
}