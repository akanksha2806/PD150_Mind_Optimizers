package com.example.mind_optimizers_android_app

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button

class LoginSignup : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login_signup)
        val btnsignup = findViewById<View>(R.id.btnsignup) as Button
        val  btnlogin = findViewById<View>(R.id.btnlogin) as Button

    }
    public fun SignUp( view: View){
        val intent = Intent(this@LoginSignup,RegisterActivity::class.java)
        startActivity(intent)
    }
    public fun Login( view: View){
        val intent = Intent(this@LoginSignup,LoginActivity::class.java)
        startActivity(intent)
    }

}

