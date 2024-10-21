package dev.zfir.ember_android

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.provider.MediaStore
import android.webkit.JavascriptInterface
import androidx.core.content.FileProvider
import java.io.File
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

class EmberAndroidCamera(private val context: Context) {
    private var photoUri: Uri? = null
    private val dateFormat = SimpleDateFormat("yyyyMMdd_HHmmss", Locale.getDefault())

    @JavascriptInterface
    fun openCamera(params: Map<String, Any?>) {
        val activity = context as? Activity ?: return

        val photoFile = createImageFile() ?: return

        photoUri = FileProvider.getUriForFile(
            context,
            "${context.packageName}.fileprovider",
            photoFile
        )

        val intent = Intent(MediaStore.ACTION_IMAGE_CAPTURE).apply {
            putExtra(MediaStore.EXTRA_OUTPUT, photoUri)
        }

        activity.startActivityForResult(intent, CAMERA_REQUEST_CODE)
    }

    private fun createImageFile(): File? {
        val timeStamp: String = dateFormat.format(Date())
        val storageDir: File? = context.getExternalFilesDir(null)

        return try {
            File.createTempFile(
                "JPEG_${timeStamp}_",
                ".jpg",
                storageDir
            )
        } catch (ex: Exception) {
            null
        }
    }

    companion object {
        const val CAMERA_REQUEST_CODE = 1
    }
}
