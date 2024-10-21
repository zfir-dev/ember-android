package dev.zfir.ember_android

import android.content.Context
import android.webkit.JavascriptInterface
import android.util.Log
import android.webkit.WebView
import org.json.JSONObject
import java.lang.reflect.Method

class NativeBridge(private val context: Context) {

    // This is the JavaScript interface method that gets called from JS
    @JavascriptInterface
    fun run(className: String, methodName: String, params: String) {
        try {
            val fullClassName = "dev.zfir.ember_android.$className"

            val clazz = Class.forName(fullClassName)

            val instance = clazz.getConstructor(Context::class.java).newInstance(context)

            val method: Method = clazz.methods.firstOrNull { it.name == methodName }
                ?: throw NoSuchMethodException("Method $methodName not found in $className")

            val computedParams = parseJsonToMap(params);

            method.invoke(instance, this, computedParams)
        } catch (e: Exception) {
            Log.e("NativeBridge", "Error invoking method: ${e.message}", e)
        }
    }

    private fun parseJsonToMap(jsonString: String?): Map<String, Any?> {
        if (jsonString.isNullOrEmpty()) {
            return emptyMap()
        }
        return try {
            val jsonObject = JSONObject(jsonString)
            val map = mutableMapOf<String, Any?>()
            val keys = jsonObject.keys()
            while (keys.hasNext()) {
                val key = keys.next()
                map[key] = jsonObject.get(key)
            }
            map
        } catch (e: Exception) {
            Log.e("NativeBridge", "Error parsing JSON: ${e.message}", e)
            emptyMap()
        }
    }
}
