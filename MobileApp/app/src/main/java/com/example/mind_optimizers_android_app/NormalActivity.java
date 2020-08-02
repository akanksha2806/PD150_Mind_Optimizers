package com.example.mind_optimizers_android_app;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class NormalActivity extends AppCompatActivity {
    TextView textView;
    TextView textView2;
    Button btn;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_normal);
        textView = findViewById(R.id.bmi);
        textView2 = findViewById(R.id.status);
        btn = findViewById(R.id.suggestions);
        Intent intentthatstarted = getIntent();
        double bmi = intentthatstarted.getDoubleExtra("BMI", 0);
        String s = "Your BMI is ";
        //textView.setText(s + String.valueOf(bmi));
        String str = s + bmi;
        textView.setText(str);
        textView2.setText("Normal weight");
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String url = "https://www.hioscar.com/blog/how-to-maintain-a-healthy-body-mass-index-bmi#:~:text=How%20to%20maintain%20a%20healthy%20BMI,balanced%20diet%20are%20equally%20important.";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

    }


}


